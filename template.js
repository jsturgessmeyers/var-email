exports.description = "Sets up inrG Email Shell"
exports.template = function(grunt, init, done) {
    init.process({}, [
    ], function(err, props) {
        var files = init.filesToCopy(props);
        init.copyAndProcess(files, props);
        init.writePackageJSON("package.json", {
            name: props.name,
            devDependencies: {
                "grunt": "^1.0.1",
                "grunt-middleman": "^0.2.0",
                "grunt-prettify": "^0.4.0",
                "grunt-special-html": "0.0.2"
            }
        });
        done();
    });
};