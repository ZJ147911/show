import axios from '@/utils/http/axios';

if (process.env.NODE_ENV == 'development') {
  const actionFn = (args, tempests) => {
    axios.post(
      args,
      {
        params: tempests,
        options: args
      },
      {
        baseURL: `http://${process.env.VUE_APP_IP}:3000/ideConsole/`
      }
    );
  };
  const originalConsole = {
    log: null,
    info: null,
    warn: null,
    error: null,
    debug: null
  };
  for (let item in originalConsole) {
    console[item] = function () {
      if (arguments && arguments[0] && /^(--)|()/.test(arguments[0])) {
        // vConsoles[item](...arguments);
        actionFn(item, arguments);
      }
    };
  }
}
