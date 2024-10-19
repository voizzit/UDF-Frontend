import { PAGES } from "@/constants/apiRoutes";
import strapiFetch from "@/utils/strapiFetch";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        // Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    },
    next: {
        revalidate: 60 * 60 * 24, // data will be cached for 1 day
    }
};

export async function getPage(slug) {
    const url = `${PAGES}/${slug}`
    const urlParamsObject = ""
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}