# SmartUI SDK Sample for TestCafe

Welcome to the SmartUI SDK sample for TestCafe. This repository demonstrates how to integrate SmartUI visual regression testing with TestCafe.

## Prerequisites

- Node.js installed
- LambdaTest account credentials (for Cloud tests)
- Chrome browser (for Local tests)

## Repository Structure

```
smartui-testcafe-sample/
├── testcafeSDKLocal.js    # Test file (works for both Local and Cloud)
├── package.json            # Dependencies
└── smartui-web.json        # SmartUI config (create with npx smartui config:create)
```

## Quick Start

### Local Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LambdaTest/smartui-testcafe-sample
   cd smartui-testcafe-sample
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set your Project Token:**
   ```bash
   export PROJECT_TOKEN='your_project_token'
   ```

4. **Create SmartUI config:**
   ```bash
   npx smartui config:create smartui-web.json
   ```

5. **Run the test:**
   ```bash
   npx smartui exec -- npx testcafe chrome testcafeSDKLocal.js
   ```

### Cloud Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LambdaTest/smartui-testcafe-sample
   cd smartui-testcafe-sample
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set your credentials:**
   ```bash
   export LT_USERNAME='your_username'
   export LT_ACCESS_KEY='your_access_key'
   export PROJECT_TOKEN='your_project_token'
   ```

4. **Create SmartUI config:**
   ```bash
   npx smartui config:create smartui-web.json
   ```

5. **Run the test:**
   ```bash
   npx smartui exec -- npx testcafe "lambdatest:Chrome@latest:Windows 10" testcafeSDKLocal.js
   ```

**Note**: For cloud execution, you need to use TestCafe's LambdaTest browser provider. Install it with:
```bash
npm install testcafe-browser-provider-lambdatest
```

## Dependencies

The project uses the following key dependencies:

- `@lambdatest/smartui-cli` - SmartUI CLI
- `@lambdatest/testcafe-driver` - SmartUI TestCafe driver
- `testcafe` - TestCafe framework

## Test File

### Test File (`testcafeSDKLocal.js`)

The test file works for both local and cloud execution:

```javascript
import { Selector } from 'testcafe';
import { smartuiSnapshot } from '@lambdatest/testcafe-driver';

fixture('LambdaTest Test')
  .page('https://www.lambdatest.com');

test('Take Homepage Screenshot', async (t) => {
  // Take a screenshot using LambdaTest's TestCafe driver
  await smartuiSnapshot(t, 'screenshot');
});
```

**Note**: 
- The code is already configured and ready to use
- You can modify the URL (`https://www.lambdatest.com`) and screenshot name (`"screenshot"`) if needed
- The test uses TestCafe's fixture and test structure

## Configuration

### SmartUI Config (`smartui-web.json`)

Create the SmartUI configuration file using:
```bash
npx smartui config:create smartui-web.json
```

This will create a default configuration file that you can customize.

## View Results

After running the tests, visit your SmartUI project dashboard to view the captured screenshots and compare them with baseline builds.

## More Information

For detailed onboarding instructions, see the [SmartUI TestCafe Onboarding Guide](https://www.lambdatest.com/support/docs/smartui-onboarding-testcafe/).
