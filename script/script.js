const body = document.body

const header = document.createElement('header')

const header_top = document.createElement('div')
header_top.className = 'header_top'

const logoImg = document.createElement('img')
const main_title = document.createElement('h1')

main_title.className = 'main_title'

logoImg.src = './images/logo.png'
main_title.textContent = 'SLOGAN SLOGAN SLOGAN'


const header_bottom = document.createElement('nav')
header_bottom.className = 'header_bottom'

const menu = document.createElement('ul')
menu.className = 'menu'

const menuItems = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']

menuItems.forEach((el) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.className = 'menu_item'
    a.textContent = el

    li.append(a)
    menu.append(li)
})

const main = document.createElement('main')

const work_main = document.createElement('section')
work_main.className = ('work_main')

const work = document.createElement('div')
work.className = ('work')



for (let i = 0; i < 3; i++) {
    const work_cards = document.createElement('div')
    work_cards.className = (' work_cards')
    const img = document.createElement('img')
    img.src = './images/rawpixel-196464-unsplash.png'
    const p = document.createElement('p')
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'

    work_cards.append(img, p)
    work.append(work_cards)
}

const app = document.createElement('section')
app.className = 'app'
const h2 = document.createElement('h2')
h2.textContent = 'О приложении'
const app_background = document.createElement('div')
app_background.className = 'app_background'
const video = document.createElement('img')
video.className = 'video'
video.src = './images/rawpixel-559744-unsplash.jpg'
const play = document.createElement('img')
play.className = 'play'
play.src = './images/play-button.png'


const question = document.createElement('div')
question.className = 'question'

for (let i = 0; i < 5; i++) {
    const question_cards = document.createElement('img')
    question_cards.className = ('question_cards')
    question_cards.src = './images/question.png'
    question.append(question_cards)
}

const project = document.createElement('section')
project.className = ('project')

const h3 = document.createElement('h3')
h3.textContent = 'О проекте'

const p = document.createElement('p')
p.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные
бизнесмены,
инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от
разработки
идеи до ее реализации.`


const download = document.createElement('section')
download.className = ('download')
const h3r = document.createElement('h3')
h3r.textContent = 'Скачать'

const main_download = document.createElement('div')
main_download.className = ('main_download')

const download_icons = document.createElement('div')
download_icons.className = ('download_icons')

const android = document.createElement('img')
android.className = ('android')
android.src = './images/android.png'

const icon = document.createElement('img')
icon.className = ('icon')
icon.src = './images/icon.png'


const down_text = document.createElement('div')
down_text.className = ('down_text')

const pa = document.createElement('p')
pa.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.`

const footer = document.createElement('footer')

const h3a = document.createElement('h3')
h3a.textContent = 'SOME'

const network = document.createElement('div')
network.className = ('network')

const vk_png = document.createElement('img')
vk_png.className = ('vk_png')
vk_png.src = './images/vk.png'

const instagram = document.createElement('img')
instagram.className = ('instagram')
instagram.src = './images/instagram (1).png'

const facebook = document.createElement('img')
facebook.className = ('facebook')
facebook.src = './images/facebook.png'


const some_info = document.createElement('div')
some_info.className = ('some_info')


const block_info = document.createElement('div')
block_info.className = ('block_info')

const h4 = document.createElement('h4')
h4.textContent = 'Контакты'

const pb = document.createElement('p')
pb.textContent = `Tel.: +996 (312) 915000 + Еxt.
Fax: +996 (312) 915 028`



const block__info = document.createElement('div')
block__info.className = ('block_info')

const h4a = document.createElement('h4')
h4a.textContent = 'Адреса'

const pc = document.createElement('p')
pc.textContent = `American University of Central Asia
7/6 Aaly Tokombaev Street
Bishkek, Kyrgyz Republic 720060`


const block___info = document.createElement('div')
block___info.className = 'block_info'
const h4b = document.createElement('h4')
h4b.textContent = 'Помощь'
block___info.append(h4b,)
for (let i = 0; i < 3; i++) {
    const pi = document.createElement('p')
    pi.textContent = `Помощь`
    block___info.append(pi)
}





header.append(header_top, header_bottom)
header_top.append(logoImg, main_title)
header_bottom.append(menu)
main.append(work_main, app, project, download, download_icons, down_text, footer,)
work_main.append(work)
app.append(h2, app_background, question,)
app_background.append(video, play,)
project.append(h3, p)
download.append(h3r,)
download_icons.append(android, icon,)
down_text.append(pa,)
footer.append(h3a, network, some_info,)
network.append(vk_png, instagram, facebook,)
some_info.append(block_info, block__info, block___info)
block_info.append(h4, pb,)
block__info.append(h4a, pc,)
body.append(header, main)

