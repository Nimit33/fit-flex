import React, { useState } from "react";
import {
    Typography,
    Input,
    Button,
    Card,
    CardBody,
    CardHeader,
} from "@material-tailwind/react";

const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
            determineCategory(bmiValue);
        }
    };

    const determineCategory = (bmiValue) => {
        if (bmiValue < 18.5) {
            setCategory("Underweight");
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            setCategory("Normal Weight");
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            setCategory("Overweight");
        } else {
            setCategory("Obesity");
        }
    };

    const getCategoryGuidance = () => {
        switch (category) {
            case "Underweight":
                return (
                    <div>
                        <Typography variant="h6" color="gray" className="font-semibold mb-2">
                            Underweight
                        </Typography>
                        <Typography variant="body1" color="blue-gray">
                            If you are underweight, it might be beneficial to increase your calorie intake and focus on a balanced diet with nutrient-rich foods. Consider including more protein, healthy fats, and whole grains in your meals.
                        </Typography>
                        <Typography variant="body1" color="blue-gray" className="mt-2">
                            <strong>Suggested Diet:</strong> Include whole foods such as lean meats, nuts, seeds, avocados, and dairy. You may also consider consulting a dietitian for personalized advice.
                        </Typography>
                    </div>
                );
            case "Normal Weight":
                return (
                    <div>
                        <Typography variant="h6" color="gray" className="font-semibold mb-2">
                            Normal Weight
                        </Typography>
                        <Typography variant="body1" color="blue-gray">
                            You have a healthy weight! To maintain your current status, continue with your balanced diet and regular physical activity.
                        </Typography>
                        <Typography variant="body1" color="blue-gray" className="mt-2">
                            <strong>Suggested Diet:</strong> Keep up with a balanced diet that includes plenty of fruits, vegetables, lean proteins, and whole grains. Regular exercise like walking or jogging will also help you maintain a healthy weight.
                        </Typography>
                    </div>
                );
            case "Overweight":
                return (
                    <div>
                        <Typography variant="h6" color="gray" className="font-semibold mb-2">
                            Overweight
                        </Typography>
                        <Typography variant="body1" color="blue-gray">
                            Being overweight can increase your risk for certain health conditions. It might be a good idea to make gradual lifestyle changes such as reducing calorie intake and increasing physical activity.
                        </Typography>
                        <Typography variant="body1" color="blue-gray" className="mt-2">
                            <strong>Suggested Diet:</strong> Focus on portion control, increasing fiber intake (such as vegetables, fruits, and whole grains), and reducing processed foods and sugary drinks. Incorporate regular exercises like walking, cycling, or strength training.
                        </Typography>
                    </div>
                );
            case "Obesity":
                return (
                    <div>
                        <Typography variant="h6" color="gray" className="font-semibold mb-2">
                            Obesity
                        </Typography>
                        <Typography variant="body1" color="blue-gray">
                            Obesity can lead to serious health complications. It is important to work on losing weight gradually through a combination of a healthy diet and regular physical activity. Consult with a healthcare professional for personalized guidance.
                        </Typography>
                        <Typography variant="body1" color="blue-gray" className="mt-2">
                            <strong>Suggested Diet:</strong> A focus on a calorie-controlled diet is essential. Try increasing your intake of vegetables, lean proteins, and whole grains while reducing your intake of unhealthy fats and processed foods. Regular exercise is crucial for weight loss, including both cardiovascular and strength exercises.
                        </Typography>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
            <Card className="w-full max-w-lg shadow-lg rounded-lg">
                <CardHeader
                    variant="gradient"
                    color="indigo"
                    className="mb-4 grid h-28 place-items-center rounded-t-lg"
                >
                    <Typography variant="h3" color="white" className="font-bold">
                        BMI Calculator
                    </Typography>
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="text-center mb-6">
                        Enter your height and weight to calculate your BMI
                    </Typography>
                    <div className="flex flex-col gap-6 mb-6">
                        <Input
                            type="number"
                            label="Height (cm)"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                            color="blue"
                            size="lg"
                        />
                        <Input
                            type="number"
                            label="Weight (kg)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            color="blue"
                            size="lg"
                        />
                    </div>
                    <Button
                        onClick={calculateBMI}
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-lg"
                        disabled={!height || !weight}
                    >
                        Calculate BMI
                    </Button>
                    {bmi && (
                        <div className="mt-8 text-center animate-fade-in">
                            <Typography
                                variant="h5"
                                color="indigo"
                                className="font-extrabold mb-2"
                            >
                                Your BMI: {bmi}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="font-semibold"
                            >
                                Category: {category}
                            </Typography>
                            <div className="mt-6">
                                {getCategoryGuidance()}
                            </div>
                        </div>
                    )}
                </CardBody>
            </Card>
        </div>
    );
};

export default BMICalculator;
