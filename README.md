# clicksnap

A plugin for Appium 2.0 which could be integrated into the appium server. Once installed, the plugin allows users to take screenshots and page dumps of view hierarchy at every click



### Building and Installing the Plugin


To build the plugin, you will first need to compile typescript code. This can be done by

```
$ tsc
```

After building the plugin, you need to uninstall any previous version of this plugin.
Note: You can only upgrade a plugin which is published to NPM registry. If you want to upgrade your local plugin, ==you need to uninstall and reinstall it==.

To uninstall plugin, execute the following command.

```
$ appium plugin uninstall clicksnap
```

Next, you will install the fresh copy of your local plugin from the source directory. Open a terminal inside the plugin's root directory and execute the following command.

```
$ appium plugin install --source=local .
```

### Using Plugin with Appium

To use the plugin, start the Appium server with the following command.

```
$ appium  --use-plugins=clicksnap --base-path /wd/hub
```

Now, when you run the test you will see the following log lines in Appium whenever click command is executed.
