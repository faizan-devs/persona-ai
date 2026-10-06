import { eventType, Inngest, staticSchema } from 'inngest';

type UserSignup = {
    email: string;
    name: string;
};

export const userNewSignup = eventType('user/new.signup', {
    schema: staticSchema<UserSignup>(),
});

export const inngest = new Inngest({
    id: 'my-app',
});
