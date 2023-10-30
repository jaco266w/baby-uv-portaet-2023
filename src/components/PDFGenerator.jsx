import { Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 20,
      display: 'flex',
        flexDirection: 'row',
        gap: 25,
      flexWrap: 'wrap',
    },
    section: {
      padding: 20,
      border: '1px solid #000000'
    },
    heading: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 12,
      marginBottom: 5
    }
  });
  
  function PDFDocument({ data }) {
    return (
      <Document>
        <Page style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.headingBig}>{data.length > 0 ? data[0].trainingDay : ''}</Text>
                <Text style={styles.text}>Antal Tilmeldte:</Text>
                <Text style={styles.text}>{data.length}</Text>
            </View>
          {data.map((registration, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.heading}>Forældre Navn:</Text>
              <Text style={styles.text}>{registration.firstName} {registration.lastName}</Text>
              <Text style={styles.heading}>Email:</Text>
              <Text style={styles.text}>{registration.email}</Text>
              <Text style={styles.heading}>Baby Navn:</Text>
              <Text style={styles.text}>{registration.babyName}</Text>
              <Text style={styles.heading}>Trænings Dag:</Text>
              <Text style={styles.text}>{registration.trainingDay}</Text>
            </View>
          ))}
        </Page>
      </Document>
    );
  }

export function PDFGenerator({ registrations }, props) {
  return (
    <div>
      {registrations && (
        <PDFDownloadLink className="ml-6 text-blue-500 capitalize underline" document={<PDFDocument data={registrations} />} fileName="registered_users.pdf">
            {({ blob, url, loading, error }) =>
            loading ? 'Generating PDF...' : 'Download PDF'
            }
        </PDFDownloadLink>
        )}
    </div>
  );
}
