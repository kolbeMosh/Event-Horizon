import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props) {

        super(props);

        this.elements = "";
        fetch('http://localhost:3001')
        .then(res => res.json())
        .then(json => {

            this.elements = json[0]["Data"];
            this.forceUpdate();

        });

        console.log(this.elements);

    }

    render() {

        return (
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Amet volutpat consequat mauris nunc congue. Pulvinar elementum integer enim neque volutpat. Senectus et netus et malesuada fames ac turpis egestas. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Mattis enim ut tellus elementum sagittis vitae et leo duis. Suspendisse faucibus interdum posuere lorem. In iaculis nunc sed augue lacus viverra. A iaculis at erat pellentesque adipiscing commodo elit at. Volutpat est velit egestas dui.

Nec ullamcorper sit amet risus nullam. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Leo vel orci porta non pulvinar neque laoreet. Vel turpis nunc eget lorem dolor sed viverra ipsum. Diam vulputate ut pharetra sit amet aliquam id. Eget gravida cum sociis natoque penatibus et magnis. Orci phasellus egestas tellus rutrum tellus. Nibh sed pulvinar proin gravida hendrerit lectus. Imperdiet sed euismod nisi porta lorem. Ut pharetra sit amet aliquam id. Velit laoreet id donec ultrices. Nibh nisl condimentum id venenatis a condimentum. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.

Tellus cras adipiscing enim eu turpis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Penatibus et magnis dis parturient montes nascetur ridiculus. Morbi tincidunt ornare massa eget egestas purus viverra. Justo nec ultrices dui sapien. Amet cursus sit amet dictum sit amet. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Netus et malesuada fames ac turpis egestas sed. Suscipit tellus mauris a diam maecenas sed enim. Quis blandit turpis cursus in hac habitasse. Tortor posuere ac ut consequat semper viverra nam libero justo.

Morbi tincidunt ornare massa eget egestas purus. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Felis donec et odio pellentesque. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Risus pretium quam vulputate dignissim suspendisse in. Dictumst vestibulum rhoncus est pellentesque elit. Turpis egestas integer eget aliquet nibh praesent. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Ut sem nulla pharetra diam sit amet nisl suscipit. Tellus orci ac auctor augue mauris augue neque. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Placerat duis ultricies lacus sed turpis. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Vitae turpis massa sed elementum tempus egestas. Gravida quis blandit turpis cursus. Pharetra vel turpis nunc eget lorem dolor sed viverra. Orci sagittis eu volutpat odio.

Dignissim sodales ut eu sem integer. Amet nisl suscipit adipiscing bibendum est ultricies. Rhoncus dolor purus non enim praesent. Sit amet justo donec enim diam vulputate ut pharetra sit. Risus at ultrices mi tempus imperdiet nulla. Integer eget aliquet nibh praesent. Risus quis varius quam quisque id diam vel quam elementum. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ornare suspendisse sed nisi lacus sed viverra tellus in. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Et malesuada fames ac turpis egestas integer. Lacus vel facilisis volutpat est. Sodales ut etiam sit amet. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Morbi tristique senectus et netus et malesuada fames ac.</h1>
                <li>{this.elements}</li>
            </div>

        
        );

    }

}