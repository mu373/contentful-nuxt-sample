<template>
    <div class="wrapper">
        <div class="newsContainer">
            <div class="newsItem" v-for="post in posts">
                <div class="newsHeader">
                    <nuxt-link :to="`/posts/${post.fields.slug}`">
                        <h2>{{ post.fields.title }}</h2>
                    </nuxt-link>
                    <p>{{ $dayjs(post.fields.date).format('YYYY/MM/DD (ddd) HH:mm')}}</p>
                </div><!-- /.newsHeader -->
                <!-- <div class="newsMainText" v-html="toHtmlString(post.fields.body)"></div> -->
                <div class="newsMainText" v-html="toPlainTextString(post.fields.body).substring(0,100) + '...'"></div>
            </div>
        </div><!-- /.newsContainer -->
    </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';
const client = createClient();
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default {

    data() {
        return {
        };
    },

    asyncData() {
        return Promise.all([
            client.getEntries( {
                'content_type': 'news',
                limit: 2,
            })
        ]).then( (res) => {
            return {
                posts: res[0].items
            }
            }).catch(console.error)
    },

    methods: {
        toHtmlString(obj) {
            return documentToHtmlString(obj);
        },
        toPlainTextString(obj) {
            return documentToPlainTextString(obj);
        }
    },

};
</script>

<style lang="scss">
@import '~assets/style/pages/index.scss';
</style>