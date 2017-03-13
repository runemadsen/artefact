CREATE FUNCTION calculate_edition_number()
RETURNS trigger AS '
BEGIN
  NEW.edition_number := 1 + (SELECT COUNT(*) FROM editions WHERE work_id = NEW.work_id AND edition_type = NEW.edition_type);
  RETURN NEW;
END' LANGUAGE 'plpgsql';

CREATE TRIGGER edition_number BEFORE INSERT ON editions FOR EACH ROW EXECUTE PROCEDURE calculate_edition_number();
