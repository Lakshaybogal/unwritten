import {defineField,defineType} from 'sanity';
export default defineType({
    name:'author',
    title:'Author',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string'
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:96,
            },
        }),
        defineField({
            name:'image',
            title:'image',
            type:'image',
            options:
            {
                hotspot:true,//crop image according to the user either big or small but the face of the user should not be cut 

            },
        }),
        defineField({
            name:'bio',
            title:'Bio',
            type:'array',
            of:[{
                title:'Block',
                type:'block',//not just for writing the text but also to modify it
                styles:[{
                    title:'Normal',
                    value:'normal',

                }],
                lists:[],
            }]
        })
    ],
    preview:{
        select:{
            title:'name',
            media:'image',
        },
    }
})