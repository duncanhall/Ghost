function formatDegreesMinutesSeconds (components, direction) {
    return `${components[0]}° ${components[1]}′ ${components[2]}″ ${direction}`;
}

function formatTimestamp (time) {
    return new Date(time.split(' ').reduce((d, t) => `${d.replace(/\:/g, '-')} ${t}`)).toLocaleDateString('en-GB');
}

function getExifTable (exif, lat, long, date, isPortrait) {
    let className = isPortrait ? 'portrait' : '';
    return`\n
<table class="${className}">
    <tr>
        <td>Focal Length:</td><td>${exif.exif.FocalLength}</td>
    <tr>
    <tr>
        <td>Shutter Speed:</td><td>${exif.exif.ShutterSpeedValue}</td>
    </tr>
    <tr>
        <td>ISO:</td><td>${exif.exif.ISO}</td>
    </tr>
    <tr>
        <td>F Number:</td><td>${exif.exif.FNumber}</td>
    </tr>
</table>
<table class="portrait">
    <tr>
        <td>Camera:</td><td>${exif.image.Make} ${exif.image.Model}</td>
    </tr>

    <tr>
        <td>Date:</td><td>${date}</td>
    </tr>

    <tr>
        <td>Latitude:</td><td>${lat}</td>
    </tr>

    <tr>
        <td>Longitude:</td><td>${long}</td>
    </tr>
</table>`;
}

export default function formatExifForOutput (exif, isPortrait) {
    let latitude = formatDegreesMinutesSeconds(exif.gps.GPSLatitude, exif.gps.GPSLatitudeRef);
    let longitude = formatDegreesMinutesSeconds(exif.gps.GPSLongitude, exif.gps.GPSLongitudeRef);
    let date = formatTimestamp(exif.exif.DateTimeOriginal);
    return getExifTable(exif, latitude, longitude, date, isPortrait);
}


