import { http } from "@/utils/http";

export function getLottery(data) {
  return http.request({
    url: "/order/lottery",
    method: "post",
    data
  });
}
