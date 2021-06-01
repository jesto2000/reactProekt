// import ProfileHeaderReduser from "./ProfileHeaderReduser";
// import DilogsPageReduser from "./DilogsPageReduser";
//
//
//
// let baza = {
//     _Data: {
//         dataPosts: {
//             posts: [
//                 {id: 1, post: 'aaadd'},
//                 {id: 2, post: 'aacxvaa'},
//                 {id: 3, post: 'aaaaxcvxc'},
//                 {id: 4, post: 'aaaadddddavv'},
//                 {id: 5, post: 'aavvvvvvaaabbbb'},
//             ],
//             newpost: ''
//         },
//         dataDialogs: {
//             names: [
//                 {id: 1, namechar: 'aaaaa'},
//                 {id: 2, namechar: 'bbbbb'},
//                 {id: 3, namechar: 'ccccc'},
//                 {id: 4, namechar: 'ddddd'},
//                 {id: 5, namechar: 'fffff'},
//                 {id: 6, namechar: 'ggggg'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hello1, how a you??'},
//                 {id: 2, message: 'Hello2, how a you??'},
//                 {id: 3, message: 'Hell3, how a you??'},
//                 {id: 4, message: 'Hello4, how a you??'},
//                 {id: 5, message: 'Hello5, how a you??'},
//                 {id: 6, message: 'Hello6, how a you??'},
//             ],
//             newmessage:''
//         },
//         sidebarData: {}
//     },
//     getData() {
//         return   this._Data;
//     },
//     renderDom() {
//         console.log('ggggggggggg');
//     },
//
//     mainMetod(activ){
//         this._Data.dataPosts = ProfileHeaderReduser(this._Data.dataPosts,activ);
//         this._Data.dataDialogs = DilogsPageReduser(this._Data.dataDialogs,activ);
//
//
//             this.renderDom(this._Data);
//
//
//
//     },
//     Observer(render) {
//         this.renderDom = render;
//     }
// }
//
//
//
//
// window.baza = baza;
// export default baza;