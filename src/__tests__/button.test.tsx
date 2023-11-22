import { Button } from '@/components/ui/button';
import { beforeAll, describe, expect, it } from '@jest/globals';
import * as TestRenderer from 'react-test-renderer';
import { ReactTestRenderer } from 'react-test-renderer';

describe('Button', () => {
    let component: ReactTestRenderer;

    beforeAll(() => {
        component = TestRenderer.create(<Button>Test</Button>);
    });

    it('should render', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});