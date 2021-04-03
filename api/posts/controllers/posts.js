'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async addCount(ctx){
        let tmp = await strapi.query('posts').findOne({id: ctx.request.body.id});
        await strapi.query('posts').update({id: ctx.request.body.id}, {count: tmp.count+1});
        return 'hehe'
    }
};
