import Vue from 'vue'
import { Button, Submenu } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
//导入弹框提示
import { Message } from 'element-ui'
import { Menu } from 'element-ui'
import { MenuItem } from 'element-ui'
import { SubMenu } from 'element-ui'
import { Carousel } from 'element-ui'
import { CarouselItem } from 'element-ui'
import { Select, Option } from 'element-ui'
import { Row, Col } from 'element-ui'
import { Main, Aside } from 'element-ui'
import { InputNumber } from 'element-ui'
import { Checkbox } from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Option)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Main)
Vue.use(Aside)
Vue.use(InputNumber)
Vue.use(Checkbox)
Vue.prototype.$message = Message