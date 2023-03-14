
Param (
    [switch] $Overwrite
)

$LIST_TITLE = "Quick Access Links"

if ( $Overwrite -eq $true ) {
    Write-Output "List exists... deleting."
    Remove-PnPList -Identity $LIST_TITLE -Force -Recycle -ErrorAction SilentlyContinue
}

$list = Get-PnPList -Identity $LIST_TITLE

if( $null -eq $list ) {
    $list = New-PnPList -Title $LIST_TITLE -Template GenericList
} 



# Description
$id = New-Guid
$xml = '<Field ID="{' + $id + '}"
        DisplayName="Description"
        Name="Description"
        Type="Note"
        Required="FALSE"
        Group="@ST Columns" 
/>'

Add-PnPFieldFromXml -List $list -FieldXml $xml

# Action Text
$id = New-Guid
$xml = '<Field ID="{' + $id + '}"
        DisplayName="Action Text"
        Name="ActionText"
        Type="Text"
        Required="FALSE"
        Group="@ST Columns" 
/>'

Add-PnPFieldFromXml -List $list -FieldXml $xml

# Action URL
$id = New-Guid
$xml = '
<Field ID="{' + $id + '}"
        DisplayName="Action URL"
        Format="Hyperlink"
        Name="ActionURL"
        Required="FALSE"
        Type="URL"
        Group="@ST Columns" 
/>'

Add-PnPFieldFromXml -List $list -FieldXml $xml

# Thumbnail URL

$id = New-Guid
$xml = '
<Field 
	ClientSideComponentId="00000000-0000-0000-0000-000000000000"
    DisplayName="Thumbnail URL" 
	Format="Thumbnail" 
	Name="ThumbnailURL"               
	Type="Thumbnail"
	ID="{' + $id + '}" 
    Version="2" 
/>'

Add-PnPFieldFromXml -List $list -FieldXml $xml

# Sort Order
$id = New-Guid
$xml = '<Field ID="' + $id + '"
        Decimals="0"
        DisplayName="Sort Order"
        Max="100"
        Min="0"
        Name="SortOrder"
        Required="FALSE"
        Type="Number"
        Group="@ST Columns" 
/>'

Add-PnPFieldFromXml -List $list -FieldXml $xml

# Add to default view

$view = Get-PnPView -List $list | Where-Object { $_.DefaultView -eq $true }
Set-PnPView -List $list -Identity $view.Id -Fields "Title", "Description", "ActionText", "ActionURL", "ThumbnailURL", "SortOrder"