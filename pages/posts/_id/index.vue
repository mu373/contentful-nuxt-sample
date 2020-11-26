<template>
    <div class="wrapper">
        <div class="newsContainer">
            <div class="newsItem">
                <div class="newsHeader">
                    <h2>{{ post.fields.title }}</h2>
                    <p>{{ $dayjs(post.fields.date).format('YYYY/MM/DD (ddd) HH:mm')}}</p>
                </div><!-- /.newsHeader -->
                <div class="newsMainText" v-html="toHtmlString(post.fields.body)"></div>
            </div>
        </div><!-- /.newsContainer -->
    </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';
const client = createClient();
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
    data() {
        return {
        };
    },

    asyncData({ params, payload }) {
      return Promise.all([
        client.getEntries( {
            'content_type': 'news',
            'fields.slug': params.id,
        })
      ]).then( (res) => {
          return {
            post: res[0].items[0]
          }
        }).catch(console.error)
    },

    methods: {
        toHtmlString(obj) {
            return documentToHtmlString(obj);
        }
    },

};
</script>

<style lang="scss">
@import "~assets/style/_global.scss"
</style>