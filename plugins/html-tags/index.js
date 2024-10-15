module.exports = function () {
    return {
      name: 'inject-html-tags-plugin',
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: 'script',
              innerHTML: `
                (function() {
                  try {
                    const userPref = localStorage.getItem('theme');
                    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    const mode = userPref || systemPref;
                    document.documentElement.setAttribute('data-mode', mode);
                  } catch (e) {
                    console.error('Error setting data-mode:', e);
                  }
                })();
              `,
            },
          ],
        };
      },
    };
  };