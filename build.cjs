const svelvg = require("svelvg");

(async () => {
  await svelvg.createLibrary("healthicons", {
    iconIndex: true,
    toModuleName: ({ path, moduleName }) => {
      const directories = path.dir.split('healthicons').pop().replace(/\//g, '-');

      return svelvg.toModuleName(directories + '-' + moduleName.replace(/!/g, 'Exclamation'));
    }
  });
})();