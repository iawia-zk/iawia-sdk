# IAWIA SDK

The IAWIA SDK is a TypeScript library designed to facilitate integration with the IAWIA extension. It provides a robust verification service that enables secure and efficient zero-knowledge proof verification.

## Features

- **Verification Service**: Core service for handling zero-knowledge proof verifications
- **TypeScript Support**: Full type safety and autocompletion
- **Event-Based Communication**: Seamless integration with the IAWIA extension

## Installation

```bash
npm install @iawia/iawia-sdk
# or
yarn add @iawia/iawia-sdk
```

## Usage

### Verification Service

The verification service is the main component of the SDK, allowing you to verify zero-knowledge proofs with your company's branding.

```typescript
import { VerificationService, ZKType } from "@iawia/iawia-sdk";

// Initialize the verification service
const verificationService = new VerificationService({
  companyName: "Your Company Name",
  companyLogo: "path/to/your/logo.png",
});

// Verify zero-knowledge proofs
await verificationService.verify([
  ZKType.AGE_VERIFICATION,
  ZKType.IDENTITY_VERIFICATION,
]);
```

### Configuration

The verification service accepts the following configuration:

```typescript
interface TVerificationServiceProps {
  companyName: string; // Your company's name
  companyLogo: string; // Path to your company's logo
}
```

## Zero-Knowledge Proof Types

The SDK supports various types of zero-knowledge proofs:

- `AGE_VERIFICATION`: Verify age without revealing the exact age
- `IDENTITY_VERIFICATION`: Verify identity without exposing personal information
- (Additional ZK types as implemented)

## Development

### Building

```bash
npm run build
# or
yarn build
```

### Testing

```bash
npm test
# or
yarn test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please contact merakserhat@gmail.com
