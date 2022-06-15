import './styles/quasar.scss';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import iconSet from 'quasar/icon-set/fontawesome-v6.js';
import {
  Notify,
  Loading,
  Dialog,
  LoadingBar,
} from 'quasar';

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  iconSet,
  plugins: {
    Notify,
    Loading,
    LoadingBar,
  },
};
