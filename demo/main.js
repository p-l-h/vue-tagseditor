import Vue from 'vue'
import TagEditor from '../src/TagEditor.vue'




new Vue({
  el: 'body',
  components: { TagEditor },
  data: function (){
    return {
      store: {
        tags: []
      },
      maxTags: 5
    }
  }
});
