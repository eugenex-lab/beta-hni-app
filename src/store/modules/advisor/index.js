

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
                    productCategory: ['Treasury-Bill', 'Bonds', 'Stocks','Savings'],
                    description:'A savy investor with over 10 years experience in the financial market, lawyer and a certified financial advisor',
                },
                {
                    id: 'a2',
                    firstName: 'Femi',
                    lastName: 'Akinwale',
                    email: 'femi@sankore.com',
                    productCategory: ['Treasury-Bill', 'Bonds', 'Stocks'
                        ,'Agriculture','Real-Estate','Savings'],
                    description: 'Lead advisor and vice president of Sankore Investment',
                },
                {
                    id: 'a3',
                    firstName: 'Lilian',
                    lastName: 'Isih',
                    email: 'lilian@sankore.com',
                    productCategory: ['Agriculture','Real-Estate','Savings'],
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
        }
    },
    mutations: {

    },
    actions: {
    },
    modules: {
    }
}
