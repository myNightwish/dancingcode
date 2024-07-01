import MessageBox from './src/main';

/* istanbul ignore next */
MessageBox.install = function(Vue) {
  Vue.component(MessageBox.name, MessageBox);
};

export default MessageBox;
