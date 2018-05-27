<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li v-for="(item, index)  in items">
      {{index}} +++ {{ parentMessage }} +++ {{ item.message }}000000000000
    </li>
    <button @click="say('hello',$event)">fghhgh</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        parentMessage: 'Parent',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    },
    methods:{
      say:function (msg, event) {
        console.log(msg);
        console.log(event);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
