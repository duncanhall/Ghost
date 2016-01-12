

function formatDegreesMinutesSeconds (components, direction) {
    return `${components[0]}° ${components[1]}′ ${components[2]}″ ${direction}`;
}

function formatTimestamp (time) {
    return time.split(' ').reduce((d, t) => `${d.replace(/\:/g, '-')} ${t}`);
}

export default function formatExifForOutput (exif) {

    let latitude = formatDegreesMinutesSeconds(exif.gps.GPSLatitude, exif.gps.GPSLatitudeRef);
    let longitude = formatDegreesMinutesSeconds(exif.gps.GPSLongitude, exif.gps.GPSLongitudeRef);

    let output = `\n<table>
    <tr>
        <td>Focal Length:</td><td>${exif.exif.FocalLength}</td>
        <td>Camera:</td><td>${exif.image.Make} ${exif.image.Model}</td>
    </tr>
    <tr>
        <td>ISO:</td><td>${exif.exif.ISO}</td>
        <td>Date:</td><td>${exif.exif.DateTimeOriginal}</td>
    </tr>
    <tr>
        <td>F Number:</td><td>${exif.exif.FNumber}</td>
        <td>Latitude:</td><td>${latitude}</td>
    </tr>
    <tr>
        <td>Shutter Speed:</td><td>${exif.exif.ShutterSpeedValue}</td>
        <td>Longitude:</td><td>${longitude}</td>
    </tr>
</table>`;

    return output;
}
