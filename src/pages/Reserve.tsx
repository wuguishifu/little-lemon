import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from 'date-fns';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from 'zod';

const formSchema = z.object({
    date: z.date().refine((d) => d > new Date(), { message: 'Date must be in the future' }),
    time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).refine((t) => {
        const [hours, minutes] = t.split(':').map(Number);
        return hours >= 10 && hours <= 21 && minutes % 15 === 0;
    }, { message: 'Time must be between 10:00 and 21:00, in 15 minute intervals' }),
    people: z.string().refine(d => Number(d) > 0, { message: 'Must have at least 1 person' }).refine(d => Number(d) <= 10, { message: 'Must have at most 10 people' }),
    firstName: z.string().min(1, { message: 'First name must be at least 1 character' }),
    lastName: z.string().min(1, { message: 'Last name must be at least 1 character' }),
    phone: z.string().length(10, { message: 'invalid phone number' }).refine(d => d.match(/^[0-9]+$/), { message: 'invalid phone number' }),
    email: z.string().email({ message: 'Invalid email' }).optional(),
    comments: z.string().optional()
});

export default function Reserve() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: undefined,
            time: undefined,
            people: undefined,
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            comments: ''
        }
    });

    const navigate = useNavigate();

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        navigate('/confirm');
    }

    return (
        <main>
            <div className="bg-accent-foreground flex flex-row items-center gap-16 px-32 py-8" id="hero">
                <h1 className="text-5xl text-white">Reserve a Table</h1>
            </div>
            <div className="w-full flex justify-center">
                <div className="bg-background py-8 w-1/2" id="form">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <h1>Reservation Information</h1>
                            <div className="flex flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <h2>Date</h2>
                                                </FormLabel>
                                                <FormControl>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button className="w-full" variant='outline'>{field.value ? format(field.value, 'PPP') : <span>Select Date</span>}</Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent>
                                                            <Calendar
                                                                mode="single"
                                                                selected={field.value}
                                                                onSelect={(date) => field.onChange(date)}
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="time"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <h2>Time</h2>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="10:00" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="people"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <h2>Number of People</h2>
                                                </FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>People</SelectLabel>
                                                                <SelectItem value="1">1</SelectItem>
                                                                <SelectItem value="2">2</SelectItem>
                                                                <SelectItem value="3">3</SelectItem>
                                                                <SelectItem value="4">4</SelectItem>
                                                                <SelectItem value="5">5</SelectItem>
                                                                <SelectItem value="6">6</SelectItem>
                                                                <SelectItem value="7">7</SelectItem>
                                                                <SelectItem value="8">8</SelectItem>
                                                                <SelectItem value="9">9</SelectItem>
                                                                <SelectItem value="10">10</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <h1>Contact Information</h1>
                            <div className="flex flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <h2>First Name</h2>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="First Name" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <h2>Last Name</h2>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Last Name" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <h2>Phone Number</h2>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="123-456-7890" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <h2>Email</h2>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="peteranteater@littlelemon.com" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <h1>Comments</h1>
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="comments"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea {...field} placeholder="have any comments?" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <Button className="w-40" type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
            <Footer />
        </main>
    );
};