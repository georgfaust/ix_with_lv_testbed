import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'

import './lib/phoenix'
import './lib/phoenix_live_view'
import './lib/tailwind'

import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as ixIconsDefineCustomElements } from '@siemens/ix-icons/loader';

(async () => {
  await applyPolyfills();
  await ixIconsDefineCustomElements();
  await defineCustomElements();
})();
