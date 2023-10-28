import gulp from "gulp";
import imagemin, { mozjpeg } from "gulp-imagemin";
import fs from "fs";

const folders = fs.readdirSync("src/images");
const folder = folders[4];

gulp
  .src(`src/images/${folder}/*`)
  .pipe(imagemin([mozjpeg({ quality: 65, progressive: true })]))
  .pipe(gulp.dest(`src/output/${folder}`));
