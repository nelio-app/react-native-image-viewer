import React from "react"
import {Modal, Dimensions, ActivityIndicator} from "react-native"
import ImageViewer from "./built/index"

const images = [
  {
    url: "https://images.unsplash.com/photo-1508844958472-0762647aebac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=870693ca86035205c5161ee55421347c&auto=format&fit=crop&w=2850&q=80"
  },
  {
    url: "https://images.unsplash.com/photo-1512794751227-fefb9f898224?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed90dfd9d5890d4edd8a9288d940572e&auto=format&fit=crop&w=2850&q=80"
  },
  {
    url: "https://images.unsplash.com/photo-1496134732667-ae8d2853a045?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4dd1c9106a69065ccfa21a36cfb53b1&auto=format&fit=crop&w=2850&q=80"
  }
];

export default class App extends React.Component {

  loadingRender () {
    return (
      <ActivityIndicator size="large" />
    );
  }

  render() {
    return (
      <Modal visible={true} transparent={true}>
        <ImageViewer
          renderIndicator={() => {}}
          loadingRender={this.loadingRender}
          backgroundColor="#fff"
          imageUrls={images}
          failImageSource={{
            url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width
          }}
        />
      </Modal>
    )
  }
}
