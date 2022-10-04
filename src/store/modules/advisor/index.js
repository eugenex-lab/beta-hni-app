

export default{
    namespaced: true,
    state() {
        return {
            advisors: [
                {
                    id: 'a1',
                    firstName: 'Chris',
                    lastName: 'Okpo',
                    email: 'chris@sankore.com',
                    phone: '08012345678',
                    productCategory: ['TreasuryBill', 'Agriculture', 'Savings'],
                    description:'A savy investor with over 10 years experience in the financial market, lawyer and a certified financial advisor',
                },
                {
                    id: 'a2',
                    firstName: 'Femi',
                    lastName: 'Akinwale',
                    email: 'femi@sankore.com',
                    phone: '08012345678',
                    productCategory: ['TreasuryBill', 'Bonds', 'Stocks'],
                    description: 'Lead advisor and vice president of Sankore Investment',
                },
                {
                    id: 'a3',
                    firstName: 'Lilian',
                    lastName: 'Isih',
                    email: 'lilian@sankore.com',
                    phone: '08012345678',
                    productCategory: ['Agriculture','RealEstate','Savings'],
                    description: 'Agriculture and Real Estate expert with over 3 years experience',
                },
            ],
        }
    },
    getters: {
        advisors(state) {
            return state.advisors;
        },
        clientHasAdvisor(state) {
            return state.advisors && state.advisors.length > 0;
        },
        isAdvisor(state,getters,rootState,rootGetters) {
            const advisors = getters.advisors;
            const userId = rootGetters.userId;
            return advisors.some(advisor => advisor.id === userId);
        }
    },
    mutations: {
        addAdvisor(state, payload) {
            state.advisors.push(payload);
        }

    },
    actions: {

        addAdvisor(context, data) {
            const newAdvisor = {
                id: context.rootGetters.userId,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                productCategory: data.productCategory,
                description: data.description,
            };
            context.commit('addAdvisor', newAdvisor);
        }

    },
    modules: {
    }
}
