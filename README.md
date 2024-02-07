# SmartUI TestCafe Integration Sample

Welcome to the `smartui-testcafe-sample` repository, where we demonstrate how to integrate LambdaTest's SmartUI SDK with TestCafe for seamless visual regression testing. This guide will help you set up and run your visual tests with SmartUI and TestCafe.

## Introduction

LambdaTest's SmartUI SDK enhances your visual testing capabilities by allowing you to capture, compare, and analyze screenshots across various browsers and resolutions. It ensures your web applications look as intended across all platforms.

## Prerequisites

- Basic understanding of the Command Line Interface (CLI) and Selenium.
- An active account on [LambdaTest SmartUI](https://smartui.lambdatest.com/).

## Getting Started

### Step 1: Create a SmartUI Project

1. Navigate to the [Projects page on SmartUI](https://smartui.lambdatest.com/).
2. Click on the `new project` button.
3. Choose `CLI` or `Web` as the execution platform for your SDK tests.
4. Enter your project name, specify approvers, and add tags for easy navigation.
5. Click **Submit** to create your project.

### Step 2: Clone and Set Up the Sample Repository

Clone this repository to get started with a TestCafe test setup integrated with SmartUI.

```bash
git clone https://github.com/LambdaTest/smartui-testcafe-sample
cd smartui-testcafe-sample

### **Step 3:** Configure your Project Token

Setup your project token show in the **SmartUI** app after, creating your project.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Powershell" label="Windows-PS">

```bash
$Env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```
</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


### **Step 4:** Create and Configure SmartUI Config

You can now configure your project settings on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create smartui-web.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```json title="/smartui-sdk-project/smartui-web.json"
{
  "web": {
    "browsers": [
      "chrome", 
      "firefox",
      "safari",
      "edge",
      // Add more browser configuration here
    ],
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        360
      ]
    ], // Full Page screenshots are captured by default
    "waitForPageRender": 50000, // Optional (Should only be used in case of websites which take more than 30s to load)
    "waitForTimeout": 1000 //Optional (Should only be used in case lazy-loading/async components are present )

  }
}
```
:::info Optional Keys in SmartUI configuration

**waitForPageRender** - If one or more `URLs` in your script require a relatively higher amount of time to load, you may use the `waitForPageRender` key in the config file to make sure the screenshots are rendered correctly. Avoid using the same in case your websites render in less than 30 seconds as it might increase the execution time of your tests.


**waitForTimeout** - If you are using any `async` components, you can add wait time for the page to load the DOM of your components. This can help avoid false-positive results for your tests. You can add the wait time in milliseconds, which might increase the execution time of your tests.
:::

#### For capturing viewport screenshots

To capture a screenshot of the content currently visible in your viewport, rather than the entire page, it's important to define the viewport width in your configuration settings. Specify the desired width parameters as demonstrated in the following example to ensure that the screenshot encompasses only the viewport area.

```json
    "viewports": [
      [
        1920,
        1080
      ],
      [
        1366,
        768
      ],
      [
        360,
        640
      ]
    ],
```

### **Step 5:** Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Testcafe` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of testcafe script of which we would like to take the screenshot, as shown below: 
  

```js
import { Selector } from 'testcafe';
import { smartuiSnapshot } from '@lambdatest/testcafe-driver';

fixture('Amazon Test')
  .page('https://www.lambdatest.com');

test('Take Amazon Homepage Screenshot', async (t) => {
  // Take a screenshot using LambdaTest's TestCafe driver
  await smartuiSnapshot(t, 'LT-Homepage');
});

```

### **Step 6:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec node sdkCloud.js --config smartui-web.json
```

:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Testcafe tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the Smart UI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.
