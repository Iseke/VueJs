<template>
  <div>
      <table border=1 class="tableCl">
          <tr v-for='(post,indx) in postLists'>
             <div v-if="$route.params.postId==indx">
                 <th>Title</th>
                 <td><input type="text"  v-model="post.title" class="initF"></td>
                 <th>Description</th>
                 <td><input type="text"  v-model="post.description" class="initF"></td>
                 <th>Author</th>
                 <td><input type="text"  v-model="post.author" class="initF"></td>
                 <th>Date</th>
                 <td>{{post.creationDate}}</td>
                 <td><button @click="goHome" class="hideBtn">Hide</button></td>
                 <button @click="edit" class="doBtn">Change</button>
                 <button @click="remove(indx)" class="doBtn">Delete</button>
             </div>
          </tr>
      </table>
  </div>
</template>

<script>
    const STORAGE_KEY = 'post-storage';

    export default {
        data(){
          return{
              curId: '',
              newTitle: '',
              newDescription: '',
              newAuthor: '',
              postLists: [],

          }
        },
        created(){
            this.postLists = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } ,
        methods: {
            edit(){
                localStorage.setItem(STORAGE_KEY,JSON.stringify(this.postLists));
            },
            remove(index) {
                this.postLists.splice(index, 1);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.postLists));
                alert('Post Deleted');
                this.$router.push('/');
            },
            goHome(){
                this.$router.push('/');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .doBtn{
        font-size: 16px;
        text-align: center;
        display: inline-block;
        color: darkblue;
        padding: 7px 24px;
        margin-left: 15px;
    }
    .hideBtn{
        font-size: 12px;
        text-align: center;
        display: inline-block;
        color: darkblue;
        padding: 7px 12px;
    }
    .tableCl{
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 16px;
        background: white;
        max-width: 70%;
        width: 70%;
        text-align: left;
    }
    .initF{
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 16px;
    }
</style>
