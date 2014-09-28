/** @module */
modules.define('auth_no__buttons', ['i-bem__dom', 'jquery', 'dom'], function(provide, BEMDOM, $, dom) {
  console.log(this.name);
  provide(BEMDOM.decl(this.name, {
    onSetMod: {
      'js': {
        'inited': function() {
          console.log(this);
          this.bindTo('click', function() {
            alert('Hello');
          });
        }
      }
    }
  }));
});
