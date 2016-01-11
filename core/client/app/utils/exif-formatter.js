
export default function formatExifForOutput (exif) {
    let output = `\n<table>
    <tr>
        <td>Focal Length: ${exif.exif.FocalLength}</td>
        <td>Camera: ${exif.image.Make} ${exif.image.Model}</td>
    </tr>
    <tr>
        <td>ISO: ${exif.exif.ISO}</td>
        <td>Date: ${exif.exif.DateTimeOriginal}</td>
    </tr>
    <tr>
        <td>F Number: ${exif.exif.FNumber}</td>
        <td>Latitude: ${exif.gps.GPSLatitude}</td>
    </tr>
    <tr>
        <td>Shutter Speed: ${exif.exif.ShutterSpeedValue}</td>
        <td>Longitude: ${exif.gps.GPSLongitude}</td>

    </tr>
    <tr>
        <td>Exposure: ${exif.exif.ExposureTime}</td>
        <td></td>
    </tr>
</table>`;

    return output;
}
