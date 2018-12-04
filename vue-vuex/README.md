# Vuex

* store.js中：
>* state： 类似于data属性
>* mutations： 类似于methods属性
>* getters： 类似于computed属性
>* actions：  actions中创建的方法在执行时都是异步执行，然而，它不被允许直接修改state中的值，所以我们可以在actions中创建一个方法来调用mutations中的某个方法来间接修改state中的值。

* 组件中访问：
>* state：  this.$store.state.xx
>* mutations: this.$store.commit("xxx", [argument])
>* getters: this.$store.getters.xx
>* actions: this.$store.dispatch("xxx", [argument])

* 映射 mapxxx:
>* state / getters: 
>>1. 在有需要的组件中引入mapState / mapGetters：
>>>```javascript
>>>import { mapState, mapGetters } from "vuex";
>>>```
>>2. 在计算属性 *computed* 中展开mapState / mapGetters:
>>>```javascript
>>>computed: {
>>>  ...mapState(["xxx"]) // ...mapState({ xxx: "xxx" })
>>>  ...mapGetters(["xxx"]) // ...mapGetters({ xxx: "xxx" })
>>>}
>>3. 在组件中使用被映射的对象：this.xxx

>* mutations / actions:
>>1. 在有需要的组件中引入mapMutations / mapActions：
>>>```javascript
>>>import { mapMutations, mapActions } from "vuex";
>>>```
>>2. 在计算属性 *methods* 中展开mapMutations / mapActions:
>>>```javascript
>>>methods: {
>>>  ...mapMutations(["xxx"]) // ...mapMutations({ xxx: "xxx" })
>>>  ...mapActions(["xxx"]) // ...mapActions({ xxx: "xxx" })
>>>}
>>3. 在组件中使用被映射的对象：this.xxx

* vuex模块化
>* 创建一个目录 :
>> /src
>>> \+ /store
>>>> \+ index.js 
>>>---
>>>> \+ state.js 
>>>---
>>>> \+ mutations.js 
>>>---
>>>> \+ getters.js 
>>>---
>>>> \+ actions.js 
>* 文件代码如下
>>* /src/store/index.js
>>>```javascript
>>> import Vue from "vue";
>>> import Vuex from "vuex";
>>> import getters from "./getters";
>>> import mutations from "./mutations";
>>> import state from "./state";
>>> import actions from "./actions";
>>> 
>>> Vue.use(Vuex);
>>> 
>>> export default new Vuex.Store({
>>>   state,
>>>   mutations,
>>>   actions,
>>>   getters
>>> });
>>>```
>>* /src/store/state.js ...
>>> ```javascript
>>> export default {
>>>   num: 0,
>>>   userLogin: null
>>> };
>>> ```

>* 命名空间
>>* /store 下创建子目录，例如：
>> /src
>>> /store
>>>> \+/User
>>>>> \+index.js
>>* /src/store/User/index.js：
>>>```javascript
>>> import getters from "./getters";
>>> import mutations from "./mutations";
>>> import state from "./state";
>>> import actions from "./actions";
>>> import User from "./User/index";
>>> export default {
>>>   state,
>>>   mutations,
>>>   actions,
>>>   getters
>>> + namespaced: true
>>> };
>>>```
>>* /src/store/index.js：
>>>```javascript
>>> import Vue from "vue";
>>> import Vuex from "vuex";
>>> import getters from "./getters";
>>> import mutations from "./mutations";
>>> import state from "./state";
>>> import actions from "./actions";
>>>+import User from "./User/index";
>>> 
>>> Vue.use(Vuex);
>>> 
>>> export default new Vuex.Store({
>>>   state,
>>>   mutations,
>>>   actions,
>>>   getters
>>> +  modules: {
>>> +    user: User
>>> +  }
>>> });
>>>```
>>* 使用时：mapState("user", ["userName"])