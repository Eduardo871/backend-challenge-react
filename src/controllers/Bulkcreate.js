const {Category, Product}=require('../db');


 const initialBulckcreate = async (req,res) => {
    const categories = [
        {name: "landing pages"},
        {name: "website portfolios"},
        {name: "webstie eccomerce"},
        {name:"website education"},
        {name:"website wordpress"},
        {name:"native apps"},  
        {name: "desktop applications"}

    ]
    const products = [
        {
            name: "Landing one",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774869/reactNative/6398707_gewglk.jpg"
        },
        {
            name: "Landing two",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774890/reactNative/pagina1_unlu1m.jpg"
        },
        {
            name: "Landing three",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774828/reactNative/435_xjt4y8.jpg"
        },
        {
            name: "Portfolio one",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774821/reactNative/144Z_2107.w013.n001.494B.p30.494_fscwgp.jpg"
        },
        {
            name: "Portfolio two",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774869/reactNative/6398707_gewglk.jpg"
        },
        {
            name: "Portfolio three",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774828/reactNative/435_xjt4y8.jpg"
        },

        {
            name: "Education one",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774836/reactNative/2406_bni6fj.jpg"
        },
        {
            name: "Eductaion two",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774836/reactNative/2406_bni6fj.jpg"
        },
        {
            name: "Eduction three",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774828/reactNative/435_xjt4y8.jpg"
        },

        {
            name: "Apps one",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774812/reactNative/31Z_2104.w003.n001.118C.p6.118_ga87lp.jpg"
        },
        {
            name: "App two",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774836/reactNative/2406_bni6fj.jpg"
        },
        {
            name: "App three",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774828/reactNative/435_xjt4y8.jpg"
        },
        {
            name: "Wordpress one",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774836/reactNative/2406_bni6fj.jpg"
        },
        {
            name: "Wordpress two",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774812/reactNative/31Z_2104.w003.n001.118C.p6.118_ga87lp.jpg"
        },
        {
            name: "Wordpress three",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774828/reactNative/435_xjt4y8.jpg"
        },
        {
            name: "Desktop one",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774836/reactNative/2406_bni6fj.jpg"
        },
        {
            name: "Desktop two",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774836/reactNative/2406_bni6fj.jpg"
        },
        {
            name: "Desktop three",
            description: "is a product",
            image: "https://res.cloudinary.com/dlqf1ossr/image/upload/v1642774828/reactNative/435_xjt4y8.jpg"
        },
    ]   
    try {
        const createCategories = await Category.bulkCreate(categories);
        const createProducts = await Product.bulkCreate(products);
        for (let index = 0; index < createCategories.length; index++) {
            const element = createCategories[index];
            if(index === 0)  element.addProducts([1,2,3]);
            if(index === 1)  element.addProducts([4,5,6]);
            if(index === 2)  element.addProducts([7,8,9]);
            if(index === 3)  element.addProducts([10,11,12]);
            if(index === 4)  element.addProducts([13,14,15])
            if(index === 5)  element.addProducts([16,17,18])    
        }
        res.send(createCategories)
    } catch (error) {
        res.status(400).send(error)        
    }
}


module.exports = {
    initialBulckcreate
}