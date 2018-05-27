<template>
  <div>
    {{msg}}
    <home-header></home-header>
    <div class="content">
      <ul class="cont-ul">
        <list @upup="change" :msg="msg" v-for="(item,index) in items" :key="index" :price="item.price"
              :title="item.title" :img="item.img"></list>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
  import homeHeader from "@/components/homeHeader"
  import list from "@/components/list"
  import commonFooter from "@/components/commonFooter"

  export default {
    data() {
      return {
        items: [],
        msg: ""
      }
    },
    name: "",
    components: {
      homeHeader, list, commonFooter
    },
    created() {
      this.$ajax.get("/api/goods").then((data) => {
        console.log(data)
        this.items = data.data.data;
      })
    },
    methods: {
      change(msg) {
        console.log(msg)
        this.msg = msg;
      }
    }
  }
</script>
<style scoped>

</style>
