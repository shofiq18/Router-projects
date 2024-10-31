import PriceOption from "./PriceOption";


const PriceOptions = () => {

    const PriceOptions = 
    [
        {
            "id": "1",
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "One free personal training session",
                "Access to cardio equipment",
                "Monthly fitness assessment",
                "Access to gym app for workout tracking"
            ]
        },
        {
            "id": "2",
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group fitness classes",
                "Two free personal training sessions per month",
                "Access to the sauna",
                "Free guest pass once per month",
                "Access to exclusive workout tutorials",
                "Monthly progress tracking with fitness report"
            ]
        },
        {
            "id": "3",
            "name": "Premium Plan",
            "price": 79.99,
            "features": [
                "24/7 gym access",
                "Locker room access with towel service",
                "Unlimited group fitness classes",
                "Four free personal training sessions per month",
                "Access to sauna and steam room",
                "Nutrition and wellness consultations",
                "Access to meditation and relaxation area",
                "Complimentary protein shakes after workout",
                "Bi-weekly fitness assessment and goal setting"
            ]
        },
        {
            "id": "4",
            "name": "Elite Plan",
            "price": 109.99,
            "features": [
                "24/7 gym access",
                "Private locker and towel service",
                "Unlimited group and specialized fitness classes",
                "Six free personal training sessions per month",
                "Full access to spa amenities",
                "Priority booking for classes and equipment",
                "Dedicated fitness consultation and wellness check-ins",
                "Free monthly massage session",
                "Exclusive access to high-intensity interval training (HIIT) classes",
                "Personalized nutrition and meal planning",
                "Discount on supplements and apparel",
                "Annual body composition analysis and detailed report"
            ]
        }
    ]
    
    return (
        <div className="m-12">
            <h2 className="text-7xl font-bold text-green-500 text-center">Best prices in the town</h2>
            <div className="border-b-2 border-green-700 mt-4"></div>
            <div className=" gap-4 grid  md:grid-cols-3   mt-8 ">
            {
                PriceOptions.map( option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;