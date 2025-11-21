# SmartUI SDK Sample for TestCafe

Welcome to the SmartUI SDK sample for TestCafe. This repository demonstrates how to integrate SmartUI visual regression testing with TestCafe.

## Repository Structure

```
smartui-testcafe-sample/
├── testcafeSDKLocal.js    # Test file (works for both Local and Cloud)
├── package.json            # Dependencies
└── smartui-web.json        # SmartUI config (create with npx smartui config:create)
```

## 1. Prerequisites and Environment Setup

### Prerequisites

- Node.js installed
- LambdaTest account credentials (for Cloud tests)
- Chrome browser (for Local tests)

### Environment Setup

**For Cloud:**
```bash
export LT_USERNAME='your_username'
export LT_ACCESS_KEY='your_access_key'
export PROJECT_TOKEN='your_project_token'
```

**For Local:**
```bash
export PROJECT_TOKEN='your_project_token'
```

## 2. Initial Setup and Dependencies

### Clone the Repository

```bash
git clone https://github.com/LambdaTest/smartui-testcafe-sample
cd smartui-testcafe-sample
```

### Install Dependencies

The repository already includes the required dependencies in `package.json`. Install them:

```bash
npm install
```

**Dependencies included:**
- `@lambdatest/smartui-cli` - SmartUI CLI
- `@lambdatest/testcafe-driver` - SmartUI TestCafe driver
- `testcafe` - TestCafe framework

**For Cloud execution, also install:**
```bash
npm install testcafe-browser-provider-lambdatest
```

### Create SmartUI Configuration

```bash
npx smartui config:create smartui-web.json
```

## 3. Steps to Integrate Screenshot Commands into Codebase

The SmartUI screenshot function is already implemented in the repository.

**Test File** (`testcafeSDKLocal.js`):
```javascript
import { smartuiSnapshot } from '@lambdatest/testcafe-driver';

fixture('LambdaTest Test')
  .page('https://www.lambdatest.com');

test('Take Homepage Screenshot', async (t) => {
  await smartuiSnapshot(t, 'screenshot');
});
```

**Note**: The code is already configured and ready to use. You can modify the URL and screenshot name if needed. The `smartuiSnapshot` function takes the test controller `t` as the first parameter and the screenshot name as the second parameter.

## 4. Execution and Commands

### Local Execution

```bash
npx smartui exec -- npx testcafe chrome testcafeSDKLocal.js
```

### Cloud Execution

```bash
npx smartui exec -- npx testcafe "lambdatest:Chrome@latest:Windows 10" testcafeSDKLocal.js
```

**Note**: Replace `"lambdatest:Chrome@latest:Windows 10"` with your desired browser and platform.

## Test File

The test file (`testcafeSDKLocal.js`) works for both local and cloud execution.

## Configuration

### SmartUI Config (`smartui-web.json`)

Create the SmartUI configuration file using:
```bash
npx smartui config:create smartui-web.json
```

## View Results

After running the tests, visit your SmartUI project dashboard to view the captured screenshots and compare them with baseline builds.

## More Information

For detailed onboarding instructions, see the [SmartUI TestCafe Onboarding Guide](https://www.lambdatest.com/support/docs/smartui-onboarding-testcafe/).
