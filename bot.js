require('./connection')
const Telegraf = require('telegraf')
const Product = require('./models/Products')


const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx) => {
    ctx.reply('Welcome')
})

bot.help((ctx) => {
    ctx.reply('Help!')
})

bot.settings((ctx) => {
    ctx.reply('Settings')
})

bot.command('test', (ctx) =>{
    ctx.reply('my test')
})

bot.hears('piripicho', (ctx) => {
    ctx.reply('adios pipi1')
})

/*bot.on('text', (ctx) => {
    ctx.reply('typing...')
})*/

bot.on('sticker', ctx => {
    ctx.reply('Noice!')
})

bot.mention('BotFather', ctx => {
    ctx.reply('has mencionado a alguien!')
})

bot.phone('+58 04142426505', ctx => {
    ctx.reply('este es un numero de telefono')
})

bot.hashtag('pipi', ctx =>{
    ctx.reply('este es un hashtag')
})

bot.command('create', async(ctx) => {
    const arrgs = ctx.message.text.split(" ")
    if(arrgs.length > 3)
        return ctx.reply('many arguments')
    
    let hash = arrgs[1]
    let desc = arrgs[-1]
    const obj =  new Product({
        hashtag : hash,
        description : desc
    })
    await obj.save();
    ctx.reply('obj saved')
})

bot.launch()
