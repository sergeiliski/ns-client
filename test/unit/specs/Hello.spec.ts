import Vue from 'vue';
import Hello from '@/components/Hello.vue';

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const constructor = Vue.extend(Hello);
    const vm = new constructor().$mount();
    expect(vm.$el.querySelector('.notification')!.textContent)
    .to.equal('Hello world!');
  });
});
