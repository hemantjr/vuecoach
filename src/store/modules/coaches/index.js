import mutations from './mutations.js';
import getters from './getter';
import actions from './actions.js';
export default {
    namespace : true,
    state(){
        return {
            coaches:[
                {
                    id:'c1',
                    firstName : 'Hemant',
                    lastName : 'Jangid',
                    areas : ['PHP','Laravel','React'],
                    description : 'I am Hemant Jangid',
                    hourlyRate : 30,
                },
                {
                    id:'c2',
                    firstName : 'Ravi',
                    lastName : 'Koriya',
                    areas : ['PHP','Laravel','React'],
                    description : 'I am Ravi koriya',
                    hourlyRate : 50,
                }
            ]
        }
    },
    mutations,
    actions,
    getters
};