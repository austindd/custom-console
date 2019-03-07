function customLog() {
    if (arguments.length < 1) {
        return false;
    }
    const keyValuePairs = getOutput(arguments).map(function (value) {
        return value;
    });
    generateOutput(keyValuePairs);
    function getOutput(args) {
        _args = Array.prototype.slice.call(args);
        names = _args.map(function (value, index) {
            if (typeof value === 'object') {
                let objKeys = Object.keys([value][0]);
                let objValues = [value][0];
                return objKeys.map(function (_value, _index) {
                    return {
                        name: _value,
                        value: value[_value]
                    };
                });
            }
            else {
                return [{ name: String(value), value: value }];
            }
        });
        return names;
    }
    function generateOutput(outputArr) {
        console.group("\r\n" + "| =========== [ GROUP ] =========== |" + "\r\n");
        console.groupCollapsed("::: Values :::")
        outputArr.forEach(function (outputCluster, index) {
            if (outputCluster.length > 1) {
                outputCluster.forEach(function (item) {
                    // console.log(item.name, item.value);
                    console.log(" [NAME]:", "'"+item.name+"'");
                    console.log("[VALUE]:    ", item.value, "\r\n");
                });
            }
            else {
                console.log(" [NAME]:", "'"+outputCluster[0].name+"'");
                console.log("[VALUE]:    ", outputCluster[0].value, "\r\n");
            }
        });
        console.groupEnd()
        console.groupCollapsed("::: Trace :::");
        console.trace();
        console.groupEnd();
        console.groupEnd();
        console.log("| --------------------------------- |" + "\r\n");
    }
}
