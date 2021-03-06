"use strict";
var _ = require('lodash');
var nodeify_ts_1 = require('nodeify-ts');
var child_process = require('child_process');
var exec = child_process.exec;
var extractResult = function (result) {
    try {
        result.object = JSON.parse(result.raw);
    }
    catch (e) {
        result.object = e;
    }
    return result;
};
var Aws = (function () {
    function Aws(options) {
        if (options === void 0) { options = {
            accessKey: null,
            currentWorkingDirectory: null,
            secretKey: null,
        }; }
        this.options = options;
    }
    Aws.prototype.command = function (command, callback) {
        var aws = this;
        var execCommand = 'aws ' + command;
        var promise = Promise.resolve().then(function () {
            var env_vars = ('HOME PATH AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY ' +
                'AWS_SESSION_TOKEN AWS_DEFAULT_REGION ' +
                'AWS_DEFAULT_PROFILE AWS_CONFIG_FILE').split(' ');
            var env = _.reduce(env_vars, function (result, value) {
                if (process.env[value]) {
                    result[value] = process.env[value];
                }
                return result;
            }, {});
            env['DEBUG'] = '';
            if (aws.options.accessKey) {
                env['AWS_ACCESS_KEY_ID'] = aws.options.accessKey;
            }
            if (aws.options.secretKey) {
                env['AWS_SECRET_ACCESS_KEY'] = aws.options.secretKey;
            }
            var execOptions = {
                cwd: aws.options.currentWorkingDirectory,
                env: env,
                maxBuffer: 200 * 1024 * 1024,
            };
            return new Promise(function (resolve, reject) {
                exec(execCommand, function (error, stdout, stderr) {
                    if (error) {
                        var message = "error: '" + error + "' stdout = '" + stdout + "' stderr = '" + stderr + "'";
                        console.error(message);
                        reject(message);
                    }
                    resolve({ stderr: stderr, stdout: stdout });
                });
            });
        }).then(function (data) {
            var result = {
                command: execCommand,
                error: data.stderr,
                raw: data.stdout,
            };
            return extractResult(result);
        });
        return nodeify_ts_1.default(promise, callback);
    };
    return Aws;
}());
exports.Aws = Aws;
var Options = (function () {
    function Options(accessKey, secretKey, currentWorkingDirectory) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
        this.currentWorkingDirectory = currentWorkingDirectory;
    }
    return Options;
}());
exports.Options = Options;