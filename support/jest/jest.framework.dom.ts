import '@testing-library/jest-dom';

import { toHaveNoViolations } from 'jest-axe';
import { createSerializer, matchers } from 'jest-emotion';
import { setupProsemirrorEnvironment } from 'jest-prosemirror';
import { ignoreJSDOMWarnings, setupRemirrorEnvironment } from 'jest-remirror';

expect.addSnapshotSerializer(createSerializer({}));
expect.extend(toHaveNoViolations);
expect.extend(matchers);

/* Add matchers for jest-prosemirror */
setupProsemirrorEnvironment();

/* Setup Remirror test environment */
setupRemirrorEnvironment();
ignoreJSDOMWarnings();
