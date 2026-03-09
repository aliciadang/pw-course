/* 
Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
Như vậy, nếu bạn cao 1,7m, tức 170cm thì :
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
Cân nặng tối đa là: 70kg
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
Phạm vi áp dụng: Công thức áp dụng cho 100 < chiều cao < 200
 */

const chieuCao = 154;
const canNangLyTuong = ((chieuCao - 100) * 9 / 10);
const canNangToiDa = (chieuCao - 100);
const canNangToiThieu = ((chieuCao - 100) * 8 / 10);

console.log("Cân nặng lý tưởng: ", canNangLyTuong, "kg. Cân nặng tối đa: ", canNangToiDa, "kg. Cân nặng tối thiểu: ", canNangToiThieu, "kg");

