
import React from 'react';
import { mockComponent } from 'react-dom/test-utils';
import { create } from 'react-test-renderer';
import ProfileStatus from './profileStatus';
import ProfileStatusWithHooks from './profileStatusWithHooks';

describe("Button component", () => {
    test("Status should be in the state", () => {
        const component = create(<ProfileStatus status="it" />)
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it')
    });
    test("Span should be displayed after creation", () => {
        const component = create(<ProfileStatus status="it" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("Span status is correct", () => {
        const component = create(<ProfileStatus status="it" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('it');
    });
    test(" <input> should'be displayed after creation", () => {
        const component = create(<ProfileStatus status="it" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("Input should be displayed in edit mode, instead of span", () => {
        const component = create(<ProfileStatus status="it" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe('it');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="it" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})
