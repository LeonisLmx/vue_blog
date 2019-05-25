<template>
  <div class="main">
    <div class="body">
      <div class="left-box">
        <div class="hot-type">
          <span>热门文章</span>
          <ul>
            <li v-bind:class="index==1 ? 'active' : ''" @click="search()">全部</li>
            <li v-bind:class="index==2 ? 'active' : ''" @click="search(-1)">爬取</li>
            <li v-bind:class="index==3 ? 'active' : ''" @click="search(1)">原创</li>
          </ul>
        </div>
        <div class="article-body" v-for="list in lists">
          <div class="each-article">
            <ul class="line-tag">
              <li v-if="list.hot != ''">
                <a :href="list.article_url" class="hot" target="_blank">{{list.hot}}</a>
              </li>
              <li v-if="list.type != ''">
                <a :href="list.article_url" class="type" target="_blank">{{list.type}}</a>
              </li>
              <li>
                <a :href="list.author_url" target="_blank">{{list.author}}</a>
              </li>
              <li>
                <a :href="list.article_url" target="_blank">{{list.time}}</a>
              </li>
              <li v-for="entity in list.tags">
                <a :href="'https://juejin.im/tag/' + entity">{{entity}}</a>
              </li>
            </ul>
            <div class="line-title">
              <a :href="list.article_url" target="_blank">{{list.title}}</a>
            </div>
            <ul class="line-icon">
              <li class="zan-box" @mouseenter="enter(list)" @mouseleave="leave(list)">
                <img
                  class="zan"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                  alt="点赞"
                >
                <span class="zan-num">{{list.good_num}}</span>
              </li>
              <li class="comment-box" @mouseenter="enter(list)" @mouseleave="leave(list)">
                <img
                  class="comment"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPjc1MzFEREU0LTZCMzgtNDI4Ny04QTJBLUY2ODVGMDgzNUFGQzwvdGl0bGU+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjU5IiB5PSI1NCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjI1IiByeD0iMSIvPjxtYXNrIGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTQiIGhlaWdodD0iMjUiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OCAtNTYpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik03MiA2MXY4LjAzOGg0LjQ0NEw4MS4xMTEgNzJ2LTIuOTYySDg0VjYxeiIvPjx1c2Ugc3Ryb2tlPSIjRURFRUVGIiBtYXNrPSJ1cmwoI2IpIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPg=="
                  alt="留言"
                >
                <span class="comment-num">{{list.message_num}}</span>
              </li>
              <li class="hide-line" v-if="list.show">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QjFBMjZEODAtQ0ZCRC00REIyLThCQTAtODc0MEVBMTE2RTExPC90aXRsZT48ZyBzdHJva2U9IiNBQUIwQkEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEwLjUyNCAzLjQxM3Y4LjIzNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMy4wMjcgNy41MDhjLjgxMyAwIDEuNjc4LS4wMSAxLjY3OC0uMDEuNDQ5IDAgLjgxMi4zNzYuODEyLjgyNmwtLjAwNSA2LjM2YS44MTkuODE5IDAgMCAxLS44MTEuODI2SDYuMzFhLjgyMi44MjIgMCAwIDEtLjgxMS0uODI2bC4wMDUtNi4zNmMwLS40NTYuMzYtLjgyNS44MTItLjgyNWwxLjY4OS4wMDZNOC4zNzMgNS4xMTFsMi4xNDMtMi4wOSAyLjE0MyAyLjA3Ii8+PC9nPjwvc3ZnPg=="
                  alt="分享"
                >
              </li>
              <li class="hide-line" v-if="list.show">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik04LjEzNiAxMi40NDZjLS4zNTItLjE5NS0uOTIyLS4xOTUtMS4yNzQgMGwtMi41MzcgMS4zOTdjLS43MDQuMzg2LTEuMTY0LjAzMy0xLjAzLS43ODZMMy43OCAxMC4xYy4wNjctLjQxLS4xMDktLjk3OC0uMzk1LTEuMjdMMS4zMzQgNi43MzZjLS41Ny0uNTgyLS4zOTEtMS4xNS4zOTQtMS4yN2wyLjgzNS0uNDNjLjM5My0uMDYxLjg1NS0uNDEyIDEuMDMtLjc4NmwxLjI2OC0yLjY5MWMuMzUzLS43NDYuOTI0LS43NDQgMS4yNzUgMGwxLjI3IDIuNjkxYy4xNzUuMzc0LjYzNy43MjYgMS4wMzEuNzg1bDIuODM2LjQzMmMuNzg2LjExOS45NjIuNjkuMzkzIDEuMjdMMTEuNjE0IDguODNjLS4yODUuMjkyLS40NjIuODYtLjM5NSAxLjI3bC40ODUgMi45NTdjLjEzNS44MjItLjMyOSAxLjE3Mi0xLjAzLjc4NmwtMi41MzgtMS4zOTd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                  alt="收藏"
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="to_top" v-show="flag" @click="toTop()">回到顶层👆</div>
      </div>
      <app-aside></app-aside>
    </div>
  </div>
</template>

<script>
import Aside from "../home/aside.vue";
export default {
  name: "App",
  data() {
    return {
      lists: [
        // {
        //     hot: "热",
        //     type: "",
        //     author: "渔人码头",
        //     time: "7小时前",
        //     tags: ["JavaScript"],
        //     title: "ES2018（ES9） 带来的重大新特性 – JavaScript 完全手册（2018版）",
        //     goodNum: "87",
        //     messageNum: "22",
        //     articleUrl: "https://juejin.im/entry/5be2243451882516c713cda4",
        //     authorUrl: "https://juejin.im/user/557e5397e4b078e61fe6cb88"
        // }
      ],
      page: 1,
      isOrigin: "",
      index: 1,
      text: "",
      flag: false,
      total: 0
    };
  },
  components: {
    "app-aside": Aside
  },
  created() {
    var _this = this;
    _this.isOrigin = _this.$route.query.isOrigin == 1 ? 1 : "";
    _this.index = _this.$route.query.isOrigin == 1 ? 3 : 1;
    $.ajax({
      url: url + "/user/get_address",
      success: function(data) {
        if (data.body.flag) {
          var message = data.body.message;
          if (data.body.near.length > 0) {
            message = message + "\n以下结果仅供参考娱乐";
            message = message + "\n您附近有以下IP也访问过噢！";
          }
          for (var i = 0; i < data.body.near.length; i++) {
            var element = data.body.near[i];
            message =
              message +
              "\n" +
              element.split("_")[0] +
              "   " +
              element.split("_")[1];
          }
          // data.body.near.array.forEach(element => {
          //    message = message + "\r\n" + element.split("_")[0] + "   " + element.split("_")[1];
          // });
          alert(message);
        }
      }
    });
  },
  mounted() {
    const _this = this;
    window.addEventListener("scroll", _this.handleScroll, true);
    $.ajax({
      url:
        url +
        "/user/getList?pageNum=" +
        _this.page +
        "&text=" +
        _this.text +
        "&isOrigin=" +
        _this.isOrigin,
      success: function(data) {
        for (var i = 0; i < data.body.list.length; i++) {
          data.body.list[i].show = false;
        }
        _this.lists = data.body.list;
        _this.total = data.body.total;
      }
    }),
      // 接受发射的 search 事件
      _this.$root.eventHub.$on("search_article", yourData => {
        _this.text = yourData;
        $.ajax({
          url:
            url +
            "/user/getList?pageNum=" +
            _this.page +
            "&isOrigin=" +
            _this.isOrigin +
            "&text=" +
            yourData,
          success: function(data) {
            for (var i = 0; i < data.body.list.length; i++) {
              data.body.list[i].show = false;
            }
            _this.lists = data.body.list;
          }
        });
      }),
      // 因为dom树是后期渲染出来的，所以做个延时加载
      setTimeout(function() {
        $("body .line-icon img").click(function() {
          window.alert("未登录不能点赞或者留言");
        });
      }, 1000);
  },
  methods: {
    enter: function(obj) {
      obj.show = true;
    },
    leave: function(obj) {
      obj.show = false;
    },
    handleScroll: function() {
      var _this = this;
      // 滚动条距离底部小于2的时候触发ajax
      if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop -
          document.documentElement.clientHeight <
        2
      ) {
        if (_this.page * 20 >= _this.count) {
          _this.flag = true;
        } else {
          _this.page = _this.page + 1;
          $.ajax({
            url:
              url +
              "/user/getList?pageNum=" +
              _this.page +
              "&isOrigin=" +
              _this.isOrigin +
              "&text=" +
              _this.text,
            success: function(data) {
              _this.lists = _this.lists.concat(data.body.list);
            }
          });
        }
      }
    },
    search: function(obj) {
      var _this = this;
      if (obj == undefined) {
        obj = "";
        _this.index = 1;
      } else if (obj == "-1") {
        _this.index = 2;
      } else if (obj == "1") {
        _this.index = 3;
      }
      _this.page = 1;
      _this.isOrigin = obj;
      $.ajax({
        url:
          url +
          "/user/getList?pageNum=" +
          _this.page +
          "&isOrigin=" +
          _this.isOrigin +
          "&text=" +
          _this.text,
        success: function(data) {
          for (var i = 0; i < data.body.list.length; i++) {
            data.body.list[i].show = false;
          }
          _this.lists = data.body.list;
        }
      });
    },
    toTop: function() {
      window.scroll(0, 0);
    }
  }
};
</script>

<style>
</style>
