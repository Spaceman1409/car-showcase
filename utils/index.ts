import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, fuel, limit, model } = filters;

    const headers = {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "0da8fc5375msh10846b77a26ab26p1eb181jsnb782d38e1914",
            "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
        },
    };

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&limit=${limit}&fuel_type=${fuel}&year=${year}`,
        headers
    );

    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, year, model } = car;

    url.searchParams.append("customer", make);
    url.searchParams.append("modelFamily", model?.split(" ")[0]);
    url.searchParams.append("zoomtype", "fullscreen");
    url.searchParams.append("modelyear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathName = `${
        window.location.pathname
    }?${searchParams.toString()}`;
    return newPathName;
};
